import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { profileService } from '../services/profile.service';
import { UserProfile } from '../types/auth.types';

export const useUserProfile = (userId: string | undefined) => {
  const queryClient = useQueryClient();

  const {
    data: profile,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => profileService.getProfile(userId!),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const updateProfileMutation = useMutation({
    mutationFn: (updates: Partial<UserProfile>) =>
      profileService.updateProfile(userId!, updates),
    onSuccess: (data) => {
      queryClient.setQueryData(['profile', userId], data);
    },
  });

  return {
    profile,
    loading: isLoading,
    error,
    refetch,
    updateProfile: updateProfileMutation.mutate,
    isUpdating: updateProfileMutation.isPending,
  };
};