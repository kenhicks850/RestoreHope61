export const resourceCategories = [
  {
    id: 'emotional',
    label: 'Emotional',
    title: 'Emotional & Mental Health Support',
    description: 'Support for grief, depression, anxiety, trauma, and isolation.',
    resources: [
      {
        title: 'Faith Chapel Christian Center',
        badge: 'Free',
        type: 'Biblical counseling',
        services: 'Free biblical counseling - spiritual and emotional support',
        bestFor: 'Grief, anxiety, depression, feeling unseen',
      },
      {
        title: 'Evangel Church PCA',
        badge: 'Free',
        services: 'Free confidential biblical counseling (weekly sessions)',
      },
      {
        title: 'Cornerstone Initiative - MEND',
        badge: 'Free',
        type: 'Trauma recovery and soul care',
        bestFor: 'Trauma survivors, PTSD, abuse recovery',
      },
    ],
    additional: {
      title: 'Professional Mental Health (Sliding Scale)',
      items: [
        'Valley Christian Counseling - Income-based rates',
        'HAPPI Health - Licensed counseling with sliding fees',
        'Community Mental Health Centers - State-supported',
        'Crisis Services of North Alabama - 211 (24/7)',
      ],
    },
  },
  {
    id: 'spiritual',
    label: 'Spiritual',
    title: 'Spiritual & Existential Support',
    description: 'Prayer, spiritual direction, finding meaning and hope.',
    resources: [
      {
        title: 'Impact Ministries',
        badge: 'Free',
        services: 'Spiritual growth, biblical teaching, online discipleship, community groups',
      },
      {
        title: 'Local Church Pastoral Care',
        badge: 'Free',
        services: 'Prayer support, pastoral counseling, healing groups',
        bestFor: 'Loss of faith, wrestling with forgiveness',
      },
    ],
    additional: {
      title: 'Churches Offering Spiritual Support',
      items: [
        'Church of the Highlands - Prayer teams',
        'First Baptist Huntsville - Pastoral care',
        'Grace Community Church - Mentoring',
        'Westminster Presbyterian - Guidance',
      ],
    },
  },
  {
    id: 'safety',
    label: 'Safety',
    title: 'Safety & Protection',
    description: 'Emergency shelter, safe housing, protection from abuse.',
    resources: [
      {
        title: 'Downtown Rescue Mission',
        badge: 'Free',
        services: 'Overnight lodging, meals, case management, housing programs',
      },
      {
        title: 'New Futures',
        badge: 'Free',
        services: 'Shelter for homeless families with children',
        bestFor: 'Families fleeing unsafe situations',
      },
      {
        title: 'Legal Services Alabama - DV',
        badge: 'Free',
        services: 'Protection orders, legal advocacy for abuse victims',
        contact: '866-456-4995',
      },
    ],
  },
  {
    id: 'practical',
    label: 'Practical',
    title: 'Practical & Daily Living',
    description: 'Food, clothing, housing, transportation.',
    resources: [
      {
        title: 'Huntsville Assistance Program',
        badge: 'Free',
        services: 'Emergency rent, utilities, and prescription assistance',
      },
      {
        title: 'Food Bank of North Alabama',
        badge: 'Free',
        services: 'Food distribution and pantry network',
      },
      {
        title: 'Manna House',
        badge: 'Free',
        services: 'Hot meals and food assistance',
      },
    ],
    additional: {
      title: 'Additional Resources',
      items: [
        'Rose of Sharon Soup Kitchen',
        'FoodLine - (256) 539-2191',
        'Salvation Army - Emergency assistance',
      ],
    },
  },
  {
    id: 'financial',
    label: 'Financial',
    title: 'Financial Stability',
    description: 'Budget help, debt relief, job training, emergency funds.',
    resources: [
      {
        title: 'Cornerstone Faith & Finances',
        badge: 'Free',
        services: 'Financial coaching and budgeting classes',
      },
      {
        title: 'Jobs for Life',
        badge: 'Free',
        services: 'Job readiness training and employment support',
      },
      {
        title: 'TEARS Foundation',
        badge: 'Free',
        services: 'Funeral assistance for families who have lost a child',
      },
    ],
  },
  {
    id: 'legal',
    label: 'Legal',
    title: 'Legal & Advocacy',
    description: 'Legal aid, guardianship help, tenant rights.',
    resources: [
      {
        title: 'Legal Services Alabama',
        badge: 'Free',
        services: 'Free civil legal help for low-income residents',
        contact: '866-456-4995',
      },
      {
        title: 'Madison County Volunteer Lawyers',
        badge: 'Free',
        services: 'Pro bono legal assistance',
        contact: '256-539-2275',
      },
    ],
  },
  {
    id: 'parenting',
    label: 'Parenting',
    title: 'Parenting & Caregiving',
    description: 'Childcare, parenting classes, respite care.',
    resources: [
      {
        title: 'Public Pre-K Programs',
        badge: 'Free',
        services: 'Free preschool for qualifying families',
      },
      {
        title: 'Head Start',
        badge: 'Free',
        services: 'Early childhood education and family support',
      },
      {
        title: 'DHR Child Care Subsidy',
        badge: 'Subsidized',
        badgeVariant: 'paid',
        services: 'Financial assistance for childcare costs',
      },
    ],
  },
  {
    id: 'health',
    label: 'Health',
    title: 'Health & Wellness',
    description: 'Healthcare access, chronic illness support, recovery.',
    resources: [
      {
        title: 'HAPPI Health',
        badge: 'Sliding Scale',
        badgeVariant: 'paid',
        services: 'Behavioral health, medical services',
        bestFor: 'Chronic stress, sleep issues',
      },
      {
        title: 'Community Mental Health',
        badge: 'Sliding Scale',
        badgeVariant: 'paid',
        services: 'Counseling, therapy, medical referrals',
      },
    ],
    additional: {
      title: 'Additional Health Resources',
      items: [
        'Substance abuse recovery programs',
        'Disability support services',
        'Crisis Mental Health - 211 (24/7)',
      ],
    },
  },
  {
    id: 'infertility',
    label: 'Infertility',
    title: 'Infertility Support',
    description: 'Fertility clinics, reproductive health, support groups.',
    resources: [
      {
        title: 'Fertility Institute of North Alabama',
        services: 'Comprehensive fertility evaluation, IVF',
      },
      {
        title: 'Alabama Women\'s Wellness',
        services: 'Reproductive health services',
      },
      {
        title: 'Huntsville Hospital Women & Children',
        services: 'Comprehensive women\'s health, OB/GYN',
      },
    ],
    additional: {
      title: 'Financial Assistance (National)',
      items: [
        'Hope for Fertility Foundation - Treatment grants',
        'Baby Quest Foundation - IVF funding',
        'Huntsville Infertility Support - Peer group',
      ],
    },
  },
]

export const missionCards = [
  {
    icon: 'Heart',
    title: 'Widows',
    description: 'Support for those who have lost their spouse',
  },
  {
    icon: 'Users',
    title: 'Grandparents',
    description: 'Helping those raising grandchildren',
  },
  {
    icon: 'Smile',
    title: 'Children',
    description: 'Care for those who have lost parents',
  },
  {
    icon: 'UsersRound',
    title: 'Community',
    description: 'Anyone with nowhere else to turn',
  },
]

export const processSteps = [
  {
    number: 1,
    title: 'Safety',
    description: 'First, we ensure you have a safe place and your immediate needs are met.',
  },
  {
    number: 2,
    title: 'Stability',
    description: 'Next, we connect you with resources for housing, food, financial support.',
  },
  {
    number: 3,
    title: 'Restoration',
    description: 'Finally, we support your journey toward healing, purpose, and renewed hope.',
  },
]

export const needsOptions = [
  'Emotional',
  'Spiritual',
  'Safety',
  'Food/Housing',
  'Financial',
  'Legal',
  'Parenting',
  'Health',
  'Infertility',
  'Other',
]

export const ageRanges = [
  'Under 18',
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-64',
  '65+',
]
