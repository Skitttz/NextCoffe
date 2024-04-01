import SignupForm from '../_components/Events/SignupForm';
import FeaturedItems from '../_components/FeaturedItems/FeaturedItems';
import { fetchAllEvents, fetchData } from '../utils/api';

export default async function Page() {
  const eventRaw = await fetchData('events');
  const eventData = eventRaw.data;

  const allEventsRaw = await fetchAllEvents();
  const highLightEventData =
    (Array.isArray(eventData) &&
      eventData.find((event: any) => event.isPrincipalEventMenu)) ||
    eventData[0];
  return (
    <main className="lg:max-w-7xl max-w-5xl mx-auto">
      {highLightEventData.attributes?.isPrincipalEventMenu && (
        <SignupForm
          infoText={highLightEventData.attributes?.description}
          title={highLightEventData.attributes?.name}
        />
      )}
      <FeaturedItems
        items={allEventsRaw}
        title={'List Events Open'}
        itemType={'event'}
      />
    </main>
  );
}
