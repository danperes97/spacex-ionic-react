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
