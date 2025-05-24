import { 
    Container,
    Heading,
    Separator,
    Text
 } from "@chakra-ui/react";

 export function AboutSection() {

    return (
        <Container>
            <Heading>About Me</Heading>
            <Separator />
            <Text>
                I'm a lead data analyst for a growing ecommerce business.
                I have an interest in data engineering, data visualisation, and web technologies.
                Below are some of my recent projects!
            </Text>
        </Container>
    )
 }