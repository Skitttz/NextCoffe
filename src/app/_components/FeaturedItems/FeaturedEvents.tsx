import Image from 'next/image';
import Link from 'next/link';
import { Event } from '../../utils/modal';
import { formatDate } from '@/app/utils/date';
const FeaturedEvent = ({ data: event }: Event) => {
  return (
    <Link href={`/event/${event.id}`}>
      <div className="bg-gray-100 rounded-md flex flex-col gap-y-2 shadow-sm">
        <Image
          className="h-[190px] rounded-t-md w-full object-cover"
          src={event.image}
          width={300}
          height={190}
          alt=""
        />
        <div className="bg-gray-50 rounded-md py-2 m-2 px-2 rounded-b-sm ">
          <h5 className="mt-1 font-besley font-bold text-lg text-amber-950 ">
            {event.name}
          </h5>
          <p className="my-2">
            Prices starting at{' '}
            <span className="font-semibold text-amber-800">
              ${event.singlePrice}
            </span>
          </p>
          <p className="text-sm">
            Event start day{' '}
            <span className="font-medium">{formatDate(event.initialDate)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedEvent;
