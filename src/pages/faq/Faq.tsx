import {
    IonPage,
    IonContent,
    IonSearchbar,
    IonRow,
    IonText,
} from '@ionic/react';
import Header from '../../components/header';

const faqs = [
    {
        question: 'Where can I get access to Capital IQ?',
        answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil helvetica, craf..`,
    },
    {
        question: 'How do I get access to case studies?',
        answer: `Enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute Anim pariatur cliche reprehenderit, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil helvetica, craf.`,
    },
    {
        question: 'How much should I capitalize?',
        answer: `Bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil helvetica, craf. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a.`,
    },
];

const Faq = () => {
    return (
        <IonPage>
            <Header Heading='FAQ' searchbar />
            <IonContent className="ion-padding bg-color">
                {faqs.map((faq, index) => (
                    <IonRow
                        key={index}
                        className="bg-white rounded-xl shadow p-4 mb-4"
                    >
                        <IonText className="font-semibold text-lg mb-2">
                            {faq.question}
                        </IonText>
                        <IonText className="text-sm text-primary leading-snug">
                            {faq.answer}
                        </IonText>
                    </IonRow>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Faq;
