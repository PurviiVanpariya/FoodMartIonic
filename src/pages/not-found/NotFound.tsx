import { IonPage, IonContent, IonImg, IonText, IonRow, useIonRouter } from '@ionic/react';
import Button from '../../components/common/Button';

const NotFound = () => {

    const router = useIonRouter();

    return (
        <IonPage>
            <IonContent>
                <IonRow className='py-20 px-4 space-y-4'>
                    <IonImg
                        src="https://askdemo-c24d7.web.app/assets/404.svg"
                        alt="Page not found"
                    />
                    <IonText className="text-3xl w-full text-center font-semibold mb-2">Sorry! Page not found.</IonText>
                    <IonText className="text-primary w-full text-center mb-6 max-w-xs">
                        Unfortunately the page you are looking for has been moved or deleted.
                    </IonText>
                    <Button label='GO TO HOME PAGE' onClick={() => router.push('/home')}></Button>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default NotFound;
