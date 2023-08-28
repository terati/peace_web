import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import styles from './MiniArticle.module.scss';
import { FormattedMessage } from 'react-intl';

interface MiniArticleInterface {
    imageSrc?: string;
    articleId?: string;
    linkSrc?: string;
}

function MiniArticle(props: MiniArticleInterface) {
    const {
        imageSrc = "",
        articleId = "main.article2.h2",
        linkSrc = "",
    } = props;
    const lang = useSelector((state:RootState) => state.lang ?? "");
    return (
        <>
            <div className={styles.mini_article}>
                <div className={styles.mini_article_photo_wrapper}>
                    <Image
                        src={imageSrc} 
                        layout={'fill'}
                        objectFit={'cover'}
                        placeholder="blur"
                        blurDataURL={imageSrc}
                        alt={"article image: "+imageSrc}
                    />
                </div>
                <Link href={(lang == 'zh') ? `${"/blog/zh/"+linkSrc}` : "/blog/en/"+linkSrc}>
                    <h2> <FormattedMessage id={articleId} /> </h2>
                </Link>
            </div>
        </>
    )
}

export default MiniArticle;