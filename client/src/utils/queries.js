import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      id
      username
      profilePicture
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query getProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      id
      username
      profilePicture
    }
  }
`;

export const QUERY_PROFILE_SELF = gql`
  query profileSelf()`

export const QUERY_FOLLOWED_POSTS = gql`
  query GetFollowedPosts($userId: ID!) {
    getFollowedPosts(userId: $userId) {
      following {
        posts {
          id
          body
          dateCreated
          author {
            username
            profilePicture
          }
          id
          commentCount
          isLiked
          likes {
            username
          }
          likeCount
          causedCringe
          cringes {
            username
          }
          cringeCount
          imageFlag
          image
        }
      }
    }
  }
`

export const QUERY_USER_POSTS = gql`
  getUserPosts($userId: ID!) {
    id
    body
    dateCreated
    author {
      id
      username
      profilePicture
    }
    likeCount
    likes {
      username
    }
    
  }
`

export const QUERY_COMMENTS = gql`
  getComments {

  }
`
