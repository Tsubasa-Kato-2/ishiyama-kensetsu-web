export type EventItem = {
  id: number;
  slug: string;
  type: string;
  title: string;
  date: string;
  time: string;
  place: string;
  capacity: string;
  desc: string;
  tags: string[];
  mainPhoto?: string;
  photos?: string[];
  body?: string;
  eventDates?: string[]; // カレンダー表示用 ISO形式 "2026-07-04"
};

export const upcomingEvents: EventItem[] = [
  {
    id: 1,
    slug: "sauna-renovation-viewing",
    type: "見学会",
    title: "フルリフォーム完成見学会",
    date: "2026年7月11日（土）〜17日（金）・20日（月・祝）",
    time: "10:00〜17:00",
    place: "〒093-0042 北海道網走市潮見5丁目121-45",
    capacity: "予約制",
    desc: "いつでも整えるサウナがある家見てみませんか？お気軽にご予約ください。",
    tags: ["フルリフォーム", "家サウナ", "造作洗面化粧台"],
    mainPhoto: "/images/events/sauna-renovation-viewing-main.jpg",
    photos: [],
    body: "いつでも整えるサウナがある家を、完成見学会としてご公開します。\n\nフルリフォームで実現した造作洗面化粧台や、こだわりの家サウナなど、見どころの多いお住まいです。実際の空間を体感できる貴重な機会ですので、お気軽にご予約ください。",
    eventDates: ["2026-07-11", "2026-07-12", "2026-07-13", "2026-07-14", "2026-07-15", "2026-07-16", "2026-07-17", "2026-07-20"],
  },
];
