import { getUserAuthData } from '@/entities/User';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Page } from '@/widgets/Page/Page';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const auth = useSelector(getUserAuthData);
    if (!id || !auth) {
        return null;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {id === auth.id ? null : <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
