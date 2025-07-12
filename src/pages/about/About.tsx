import {
    IonPage,
    IonToolbar,
    IonContent,
    IonFooter,
    IonIcon,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonImg,
} from '@ionic/react';
import { lockClosedOutline, documentTextOutline } from 'ionicons/icons';
import Header from '../../components/header';

const About = () => {
    return (
        <IonPage  className='bg-white'>
            <Header Heading='About Us' />
            <IonContent className="bg-color space-y-3">
                <IonImg src='https://askdemo-c24d7.web.app/assets/about.jpg'></IonImg>
                <IonRow className='ion-padding'>
                    <IonRow className='bg-white ion-padding shadow rounded-xl'>
                        <IonRow className="text-[#E96125] text-3xl font-bold leading-tight mb-6">
                            <IonText>Save more with GO!</IonText>
                            <IonText>We give you the</IonText>
                            <IonText>lowest prices on all</IonText>
                            <IonText>your grocery needs.</IonText>
                        </IonRow>
                        <IonRow>
                            <IonText className="text-lg font-semibold text-gray-900 mb-2">Our Vision</IonText>
                            <IonText className="text-sm text-gray-600 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            </IonText>

                            <IonText className="text-lg font-semibold text-gray-900 mt-6 mb-2">Our Goal</IonText>
                            <IonText className="text-sm text-gray-600 leading-relaxed">
                                When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, Lorem Ipsum has been the industry's standard dummy text ever since.
                            </IonText>
                        </IonRow>
                    </IonRow>
                </IonRow>
            </IonContent>
            <IonFooter className="bg-white">
                <IonToolbar>
                    <IonGrid>
                        <IonRow className="text-center">
                            <IonCol>
                                <IonIcon icon={lockClosedOutline} className="text-xl text-gray-700" />
                                <IonLabel className="block text-xs text-gray-700 mt-1">Privacy & Policy</IonLabel>
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={documentTextOutline} className="text-xl text-gray-700" />
                                <IonLabel className="block text-xs text-gray-700 mt-1">Terms & conditions</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default About;
