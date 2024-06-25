interface SocialLinkInfo {
    image: string;
    redirect: string;
}

const SocialLinks: { [key: string]: SocialLinkInfo } = {
    "Group" : {
        image : "https://th.bing.com/th/id/R.981b4240d95a7574f2a38cae7e653533?rik=MlTwI3gn94%2fdrw&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f6294eb0b4609037792ef36f2.png&ehk=iC4rdjnwy8eDwtELB1CLqBf1DpgRGsK1pE48reFi9xk%3d&risl=&pid=ImgRaw&r=0",
        redirect : "https://www.roblox.com/groups/32924401/Nobloxia#!about"
    },
    "Discord" : {
        image : "https://static.vecteezy.com/system/resources/previews/018/930/604/original/discord-logo-discord-icon-transparent-free-png.png",
        redirect : "https://discord.com/invite/nobloxia",
    },
    "YouTube" : {
        image : "https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
        redirect : "https://www.youtube.com/results?search_query=rob+a+convenience+store+roblox"
    }
}

export default SocialLinks