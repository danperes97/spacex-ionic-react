import React from 'react'
import { Launch } from '../generated/graphql'
import {
  IonCard,
  IonItem,
  IonAvatar,
  IonImg,
  IonText,
  IonIcon,
  IonCardContent,
  IonRow,
  IonCol,
  IonThumbnail,
} from '@ionic/react'
import { checkmark, close } from 'ionicons/icons'
import styles from './LaunchDetail.module.scss'
import noPhoto from '../assets/images/no-photo.svg'

interface Props {
  launch: Launch
}

const LaunchDetail: React.FC<Props> = ({ launch }) => (
  <IonCard>
    <IonItem lines="none">
      <IonAvatar slot="start">
        <IonImg src={launch.links.mission_patch_small} />
      </IonAvatar>

      <IonText color="dark">
        <h2 className="ion-no-padding">{launch.mission_name}</h2>
        <p className="ion-no-padding">{launch.rocket.rocket_name}</p>
      </IonText>
      <IonIcon
        slot="end"
        color={launch.launch_success ? 'success' : 'danger'}
        icon={launch.launch_success ? checkmark : close}
      />
    </IonItem>

    <IonImg
      src={launch.links.flickr_images[0] || noPhoto}
      className={styles.img}
    />

    <IonCardContent>{launch.details}</IonCardContent>

    {launch.links.flickr_images.length > 0 ? (
      <IonCardContent>
        <IonRow>
          {launch.links.flickr_images.map(image => (
            <IonCol key={image} size="3">
              <IonThumbnail className={styles.thumb}>
                <IonImg src={image} />
              </IonThumbnail>
            </IonCol>
          ))}
        </IonRow>
      </IonCardContent>
    ) : null}
  </IonCard>
)

export default LaunchDetail
