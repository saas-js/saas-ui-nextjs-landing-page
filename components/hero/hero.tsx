import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text as="h1" textStyle="h1" textAlign="left">
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  )
}
