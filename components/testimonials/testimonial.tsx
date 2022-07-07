import { Avatar } from '@chakra-ui/react'
import { Card, CardBody, CardProps } from '@saas-ui/react'
import NextLink from 'next/link'

export interface TestimonialProps extends CardProps {
  name: string
  description: React.ReactNode
  avatar: string
  href?: string
  children: React.ReactNode
}

export const Testimonial: React.FC<TestimonialProps> = (props) => {
  const { name, description, avatar, href, children, ...rest } = props
  const card = (
    <Card
      avatar={<Avatar name={name} src={avatar} />}
      title={name}
      subtitle={description}
      {...rest}
    >
      <CardBody fontSize="md">{children}</CardBody>
    </Card>
  )

  if (href) {
    return <NextLink href={href}>{card}</NextLink>
  }

  return card
}
