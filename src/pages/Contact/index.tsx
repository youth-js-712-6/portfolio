import { Button, Card, Flex, Grid, Select, Text, TextArea, TextField, useThemeContext } from "@radix-ui/themes"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import { useEffect } from "react"

type SocialCardProps = {
    label: string;
    url: string;
    at: string;
    icon: React.ReactNode;
}

const SocialCard = ({ label, url, at, icon }: SocialCardProps) => {
    return (
        <a href={url} target="_blank">
            <Card>
                <Flex gap={"2"}>
                    {icon}
                    <Flex direction={"column"}>
                        <Text size={"1"} weight={"bold"}>{label}</Text>
                        <Text size={"1"}>{at}</Text>
                    </Flex>
                </Flex>
            </Card>
        </a>
    )
}

const ContactPage = () => {
    const theme = useThemeContext()

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return (
        <>
            <h1>Contact</h1>
            <Grid columns={'3fr 2fr'} gap={"5"} className="content">
                <form>
                    <Flex direction={"column"} gap={"3"} className="contact-form">
                        <TextField.Root
                            name="nome"
                            placeholder="Seu nome"
                        />
                        <TextField.Root
                            name="email"
                            placeholder="johndoe@email.com"
                            type="email"
                        />
                        <Select.Root name="assunto" >
                            <Select.Trigger placeholder="Assunto" />
                            <Select.Content>
                                <Select.Item value="orcamento">
                                    Orçamento
                                </Select.Item>
                                <Select.Item value="parceria">
                                    Parceria
                                </Select.Item>
                                <Select.Item value="Suporte">
                                    Suporte
                                </Select.Item>
                                <Select.Item value="Outros">
                                    Outros
                                </Select.Item>
                            </Select.Content>
                        </Select.Root>
                        <TextArea placeholder="Sobre o que quer conversar?" />
                        <Button type="submit">Enviar</Button>
                    </Flex>
                </form>

                <Flex direction={"column"} gap={"2"} className="social">
                    <SocialCard 
                        label='Github'
                        url='https://github.com/pamplona007'
                        at='pamplona007'
                        icon={<IconBrandGithub />}
                    />
                    <SocialCard 
                        label='LinkedIn'
                        at="lucaspamplona"
                        url="https://linkedin.com"
                        icon={<IconBrandLinkedin />}
                    />
                    <SocialCard 
                        label='E-mail'
                        at="pamplona.developer@gmail.com"
                        url="mailto:pamplona.developer@gmail.com"
                        icon={<IconMail />}
                    />
                </Flex>
            </Grid>
        </>
    )
}

export default ContactPage