import gql from 'graphql-tag'

export const LAUNCHES_PAST_QUERY = gql`
  query LaunchesPast($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      rocket {
        rocket_name
      }
      launch_date_local
      links {
        flickr_images
      }
      id
    }
  }
`
export const LAUNCH_QUERY = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      details
      mission_name
      launch_date_utc
      launch_success
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
    }
  }
`
