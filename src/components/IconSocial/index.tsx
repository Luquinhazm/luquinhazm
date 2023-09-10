import { FaGithub, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa6"

export default function IconSocial() {
    return (
        <div className="flex space-x-4">
            <a
                className="my-6"
                href="https://github.com/Luquinhazm">
                <FaGithub className="max-[380px]:h-8" size="38" />
            </a>
            <a
                className="my-6"
                href="https://www.linkedin.com/in/luquinhazm/">
                <FaLinkedin className="max-[380px]:h-8" size="38" />
            </a>
            <a
                className="my-6"
                href="https://twitter.com/luquinhazm">
                <FaTwitter className="max-[380px]:h-8" size="38" />
            </a>
            <a
                className="my-6"
                href="https://www.twitch.tv/luquinhazm">
                <FaTwitch className="max-[380px]:h-8" size="38" />
            </a>
        </div>
    )
}