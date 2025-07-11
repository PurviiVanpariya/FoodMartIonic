import { IonContent, IonImg, IonPage, IonRow, IonText } from '@ionic/react';
import Button from '../../components/common/Button';
import Profile from './Profile';
import { useState } from 'react';
const CongratsModal = ({ showCongrats = false }) => {
    const [showProfile , setShowProfile] = useState(false)
    const onProfileClick = () => {
        setShowProfile(true)
    }
    return (
        <>
            {
                showCongrats && (
                    <IonPage className=''>
                        <IonContent className="ion-padding Modalbg-color">
                            <IonRow className="rounded-xl p-6 text-center items-end h-[calc(100vh-40px)]">
                                <IonImg src='https://askdemo-c24d7.web.app/assets/done.svg' />
                                <IonText className="text-4xl pt-8 mx-auto font-bold mb-2 text-blue-950">Congrats!</IonText>
                                <IonText className="text-green-600 font-semibold text-lg mb-4 mx-auto">
                                    Your Order has been Accepted..
                                </IonText>
                                <IonText className="text-sm mb-6">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature.
                                </IonText>
                                <Button onClick={onProfileClick} label="RETURN TO STORE" className="!w-full mt-4"></Button>
                            </IonRow>
                        </IonContent>
                        <Profile showProfile={showProfile}/>
                    </IonPage>
                )
            }
        </>
    );
};
export default CongratsModal;