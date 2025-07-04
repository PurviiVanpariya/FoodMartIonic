import {
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    IonImg,
    IonText,
    IonNote,
    IonRow,
} from '@ionic/react';
import { add, remove } from 'ionicons/icons';

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    discountLabel?: string;
    weight: string;
    quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    price,
    originalPrice,
    discountLabel,
    weight,
    quantity,
}) => {
    return (
        <IonCard className="rounded-lg shadow-md !m-0">
            <IonNote className="relative">
                {discountLabel && (
                    <IonText className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1 rounded">
                        {discountLabel}
                    </IonText>
                )}
                <IonImg src={image} alt="product" className="h-36 w-full object-contain" />
            </IonNote>
            <IonCardContent className="text-sm p-2.5">
                <IonText className="font-medium mb-1 text-black text-xs">{title}</IonText>
                <IonText className="text-lg font-bold text-black block">
                    ${price}{' '}
                    {originalPrice && (
                        <IonText className="text-gray-500 line-through text-sm">
                            ${originalPrice}
                        </IonText>
                    )}
                </IonText>
                <IonRow className="flex items-center justify-between">
                    <IonText className="text-xs text-gray-500">{weight}</IonText>
                    <IonNote className='flex items-center gap-2'>
                        <IonButton size="small" fill="clear" className='plus-btn bg-gray-600 rounded-full text-white !p-0 w-7 h-7'>
                            <IonIcon icon={remove} />
                        </IonButton>
                        <IonText>{quantity}</IonText>
                        <IonButton size="small" fill="clear" className='plus-btn bg-orange-600 rounded-full text-white !p-0 w-7 h-7'>
                            <IonIcon icon={add} />
                        </IonButton>
                    </IonNote>
                </IonRow>
            </IonCardContent>
        </IonCard>
    );
};

export default ProductCard;
