import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import tshirt_model from './tshirt_model.glb'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    tshirt_model
}

export const stepsData = [
  {
    title: 'Visualize Your Design',
    description: 'Imagine your artwork or describe the vibe you want on your T-shirt.',
    icon: step_icon_1,
  },
  {
    title: 'Pick Style & Fabric',
    description: 'Choose your fit and material – oversized, regular, hoodie, or jacket.',
    icon: step_icon_2,
  },
  {
    title: 'Preview & Order',
    description: 'Check the preview, finalize your look, and place your order instantly.',
    icon: step_icon_3,
  },
];


export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Sanjay Singh',
        role:'Indore M.P',
        stars:5,
        text:`Wore the design I made with AI to college — everyone asked where I got it from! Love this platform!`
    },
    {
        image:profile_img_2,
        name:'Pankaj Varma',
        role:'Delhi',
        stars:4,
        text:`I couldn’t believe I turned my own idea into such a cool design. Got the T-shirt in 2 days — great quality too!`
    },
    {
        image:profile_img_3,
        name:'Riya Sharma',
        role:'Shree Ram College , Delhi',
        stars:5,
        text:`Wearing my own art feels different. The design was simple, but the AI made it look premium.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]