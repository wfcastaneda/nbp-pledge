import Script from 'next/script';

export default function TwitterButton() {
    return (
        <div className='flex h-11 w-full flex-row items-center  justify-center border-2 border-gray-600 bg-white py-2 text-center font-semibold'>
            <a
                href='https://twitter.com/share?ref_src=twsrc%5Etfw'
                className='twitter-share-button'
                data-text='Check out the Never Bitcoin Pledge!'
                data-hashtags='neverbitcoin'
                data-show-count='false'
            >
                Share
            </a>
            <Script src='https://platform.twitter.com/widgets.js' />
        </div>
    );
}
