import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.trip.deleteMany(); // تنظيف الجدول قبل التسييد

  await prisma.trip.createMany({
    data: [
      {
        id: '1',
        title: 'Jenin Adventure',
        slug: 'jenin-adventure',
        destination: 'Jenin, Palestine',
        duration: 3,
        start_date: new Date('2025-06-01'),
        end_date: new Date('2025-06-03'),
        price: 320,
        originalPrice: 500,
        discountPrice: 320,
        seats: 12,
        image: '/images/jenin.jpg',
        rating: 4,
        featured: true,
        description: 'Explore the green plains of Jenin and enjoy traditional Palestinian cuisine.'
      },
      {
        id: '2',
        title: 'Jericho Desert Tour',
        slug: 'jericho-desert-tour',
        destination: 'Jericho, Palestine',
        duration: 2,
        start_date: new Date('2025-06-10'),
        end_date: new Date('2025-06-12'),
        price: 210,
        originalPrice: 400,
        discountPrice: 210,
        seats: 8,
        image: '/images/jericho.jpg',
        rating: 5,
        featured: true,
        description: 'Discover the oldest city in the world and ride camels across the desert.'
      },
      {
        id: '3',
        title: 'Hebron Cultural Escape',
        slug: 'hebron-cultural-escape',
        destination: 'Hebron, Palestine',
        duration: 4,
        start_date: new Date('2025-07-01'),
        end_date: new Date('2025-07-04'),
        price: 450,
        originalPrice: 600,
        discountPrice: 450,
        seats: 15,
        image: '/images/hebron.jpg',
        rating: 3,
        featured: false,
        description: 'A deep dive into Palestinian culture, history, and hospitality in Hebron.'
      },
      {
        id: '4',
        title: 'Nablus Nature Retreat',
        slug: 'nablus-nature-retreat',
        destination: 'Nablus, Palestine',
        duration: 5,
        start_date: new Date('2025-07-15'),
        end_date: new Date('2025-07-20'),
        price: 520,
        originalPrice: 650,
        discountPrice: 520,
        seats: 10,
        image: '/images/nablus.jpg',
        rating: 4,
        featured: true,
        description: 'Reconnect with nature in the hills of Nablus and try authentic Nabulsi knafeh.'
      },
      {
        id: '5',
        title: 'Bethlehem Heritage Tour',
        slug: 'bethlehem-heritage-tour',
        destination: 'Bethlehem, Palestine',
        duration: 3,
        start_date: new Date('2025-08-01'),
        end_date: new Date('2025-08-03'),
        price: 390,
        originalPrice: 500,
        discountPrice: 390,
        seats: 9,
        image: '/images/bethlehem.jpg',
        rating: 5,
        featured: false,
        description: 'Walk the historic streets of Bethlehem and visit world-famous heritage sites.'
      }
    ],
  });

  console.log('✅ Trips seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
