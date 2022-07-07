import * as React from 'react'
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
} from '@chakra-ui/react'

import { Section, SectionTitle, SectionTitleProps } from 'components/section'

const Revealer = ({ children }: any) => {
  return children
}

export interface FeaturesProps
  extends Omit<SectionTitleProps, 'title' | 'variant'>,
    ThemingProps<'Features'> {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  columns?: ResponsiveValue<number>
  spacing?: string | number
  aside?: React.ReactChild
  reveal?: React.FC<any>
  iconSize?: SystemProps['boxSize']
  innerWidth?: SystemProps['maxW']
}

export interface FeatureProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: SystemProps['boxSize']
  ip?: 'left' | 'top'
  variant?: string
  delay?: number
}

export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 8,
    ip,
    variant,
  } = props
  const styles = useMultiStyleConfig('Feature', { variant })

  const pos = iconPosition || ip
  const direction = pos === 'left' ? 'row' : 'column'

  return (
    <Stack sx={styles.container} direction={direction}>
      {icon && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  )
}

export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
    columns = [1, 2, 3],
    spacing = 8,
    align: alignProp = 'center',
    iconSize = 8,
    aside,
    reveal: Wrap = Revealer,
    ...rest
  } = props

  const align = !!aside ? 'left' : alignProp

  const ip = align === 'left' ? 'left' : 'top'

  return (
    <Section {...rest}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
          <SimpleGrid columns={columns} spacing={spacing}>
            {features.map((feature, i) => {
              return (
                <Wrap key={i} delay={feature.delay}>
                  <Feature iconSize={iconSize} {...feature} ip={ip} />
                </Wrap>
              )
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
    </Section>
  )
}
