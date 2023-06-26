import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
const Card = ({ post }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = post;
  //   console.log(post);
  //   console.log(currImageIndex);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {images && <img className="w-full" src={images[0]} alt={category} />}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{brand + " " + category}</div>

        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <FacebookShareButton
            url={images?.[0]}
            quote={`${description}`}
            hashtag={`#${title}`}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <TwitterShareButton url={images?.[0]} quote={description}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <LinkedinShareButton
            url={images?.[0]}
            title={title}
            summary={description}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </span>
      </div>
    </div>
  );
};

export default Card;
