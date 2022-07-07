import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'oss',
      title: 'Open Source',
      description: 'Basic compoents, perfect to get started.',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Authentication (Clerk/Supabase/Magic)',
        },
        {
          title: 'Form (react-hook-form)',
        },
        {
          title: 'Modals manager',
        },
        {
          title: 'Hotkeys',
        },
        {
          title: 'Web3 components',
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Bootstrap',
      description: 'Complete frontend stack for bootstrappers and small teams.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'One project',
        },
        {
          title: 'One developer',
        },
        {
          title: 'Advanced components',
        },
        {
          title: 'Multiple themes',
        },
        {
          title: 'Next.js and Electron boilerplates',
        },
        {
          title: 'Private discord community',
        },
        {
          title: '1 year of updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'startup',
      title: 'Startup',
      description: 'Unlimited license for growing teams.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited projects',
        },
        {
          title: 'Unlimited developers',
        },
        {
          title: '1 year of updates',
        },
        {
          title: 'Everything from Bootstrap',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}
