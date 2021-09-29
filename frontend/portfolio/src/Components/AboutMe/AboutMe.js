import { Typography, Box, List, ListItem, Grid } from "@material-ui/core"
export default function AboutMe() {
    return (
        <Box>
            <Typography>About Me</Typography>
            <Grid>
                <Box display="flex" border={1} justifyContent="center">
                    <p>
                        I'm passionate about learning the unknown. Anytime I encounter something I don't
                        know I get excited to jump right in.
                    </p>
                </Box>
                <Box border={1}>

                    <p>
                        After any work day you can find me in the gym or on a basketball court.
                        Ever since I was young I've loved being on the move and showing off my
                        competive side.
                    </p>
                </Box>
                <Box border={1}>

                    <p>
                        The beautiful part of software is the infinite potential that lies ahead.
                        Anything I imagine I can learn how to build. I strive to build technology that
                        can enable community members to create a more equitable space.
                    </p>
                </Box>
                <Box border={1}>

                    <p>
                        My creativity is inspired by listening to music. It's incredible to hear what some
                        of the most creative artists can put in a verse. In addition to diving deep into
                        lyrics, I love to search for samples. Tying the past to the present is quite a journey!
                    </p>
                </Box>
            </Grid>
            <Box>
                <Typography>Skills</Typography>
                <List>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>MaterialUI</ListItem>
                    <ListItem>Express.js</ListItem>
                    <ListItem>Node.js</ListItem>
                    <ListItem>PostGresSql</ListItem>
                    <ListItem>Python</ListItem>
                    <ListItem>Statistical Learning</ListItem>
                </List>
            </Box>
        </Box>
    )
}