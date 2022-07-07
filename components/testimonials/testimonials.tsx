import { ResponsiveValue, SimpleGrid, Stack } from '@chakra-ui/react'
import {
  Section,
  SectionProps,
  SectionTitle,
  SectionTitleProps,
} from 'components/section'
import { Testimonial } from './testimonial'

export interface TestimonialsProps
  extends Omit<SectionProps, 'title'>,
    Pick<SectionTitleProps, 'title' | 'description'> {
  columns?: ResponsiveValue<number>
}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
  const { children, title, columns = [1, null, 2], ...rest } = props
  return (
    <Section {...rest}>
      <SectionTitle title={title} />
      <SimpleGrid columns={columns} spacing="8">
        {children}
      </SimpleGrid>
    </Section>
  )
}
