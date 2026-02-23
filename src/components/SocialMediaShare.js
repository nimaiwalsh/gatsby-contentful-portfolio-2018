import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const SocialMediaShare = ({ content, link }) => {
  return (
    <div className="flex justify-center gap-4">
      <TwitterShareButton title={content} url={link} className="outline-none cursor-pointer">
        <TwitterIcon round size={40} />
      </TwitterShareButton>
      <FacebookShareButton url={link} className="outline-none cursor-pointer">
        <FacebookIcon round size={40} />
      </FacebookShareButton>
    </div>
  )
}

export default SocialMediaShare
