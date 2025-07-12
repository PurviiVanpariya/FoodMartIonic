import { IonCol, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonRow, IonTextarea } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import Button from '../../components/common/Button'

const ContactUs = () => {
    return (
        <IonPage>
            <Header Heading='Contact Us' />
            <IonContent className='bg-color'>
                <IonRow className='h-96'>
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160985005!2d72.74109895!3d19.0825223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b45c2a147%3A0xa8ef5f6462a82e65!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1619596714697!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </IonRow>
                <IonRow className='ion-padding'>
                    <IonRow className="bg-white rounded-xl shadow-md pt-2 pb-3 space-y-4 w-full -mt-36">
                        <IonItem className="w-full">
                            <IonInput
                                className='!text-[15px]'
                                label="Full Name *"
                                labelPlacement="stacked"
                                type="text"
                                placeholder="Enter Full Name"
                            />
                        </IonItem>
                        <IonItem className="w-full">
                            <IonInput
                                className='!text-[15px]'
                                label="Phone Number *"
                                labelPlacement="stacked"
                                type="text"
                                placeholder="Enter Phone Number"
                            />
                        </IonItem>
                        <IonItem className="w-full">
                            <IonInput
                                className='!text-[15px]'
                                label="Email Address"
                                labelPlacement="stacked"
                                type="text"
                                placeholder="Enter Email Address"
                            />
                        </IonItem>
                        <IonItem className="w-full">
                            <IonTextarea
                                className='!text-[15px]'
                                label="Message"
                                labelPlacement="stacked"
                                placeholder="Enter Message"
                            />
                        </IonItem>
                        <IonRow className='w-full px-4'>
                            <Button label="SEND MESSAGE" className="!w-full"></Button>
                        </IonRow>
                    </IonRow>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default ContactUs
