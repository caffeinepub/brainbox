import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Grade, EducationalSystem, Stream, UserProfile } from '../backend';

export function useUserProfile() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  const profileQuery = useQuery<UserProfile | null>({
    queryKey: ['userProfile'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getUserProfile();
      } catch (error) {
        return null;
      }
    },
    enabled: !!actor && !isFetching,
  });

  const createMutation = useMutation({
    mutationFn: async ({ grade, educationalSystem, stream }: { 
      grade: Grade; 
      educationalSystem: EducationalSystem; 
      stream: Stream | null;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.createUserProfile(grade, educationalSystem, stream);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    },
  });

  return {
    profile: profileQuery.data,
    isLoading: profileQuery.isLoading,
    createProfile: (grade: Grade, educationalSystem: EducationalSystem, stream: Stream | null) =>
      createMutation.mutateAsync({ grade, educationalSystem, stream }),
    isCreating: createMutation.isPending,
  };
}
