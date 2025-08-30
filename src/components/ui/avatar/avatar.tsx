import type {FC, JSX} from "react";
import Image from "next/image";
import type {IAvatar} from "@/components/ui/avatar/avatar.props";
import cn from "clsx";
import styles from "./avatar.module.sass";
import {AVATAR_SIZE} from "@/constants/ui.constants";

export const Avatar: FC<IAvatar> = ({
                                        onClick = () => {
                                        }, image, alt = "avatar", size = AVATAR_SIZE
                                    }: IAvatar): JSX.Element => {
    return (
        <button className={cn(styles.avatar)} onClick={onClick} type="button">
            <Image src={image} alt={alt} width={size} height={size}/>
        </button>
    );
};