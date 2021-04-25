// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function LogoutIcon(props: LogoutIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 489.888 489.888"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.383 290.5c-7.2-77.5 25.9-147.7 80.8-192.3 21.4-17.4 53.4-2.5 53.4 25 0 10.1-4.8 19.4-12.6 25.7-38.9 31.7-62.3 81.7-56.6 136.9 7.4 71.9 65 130.1 136.8 138.1 93.7 10.5 173.3-62.9 173.3-154.5 0-48.6-22.5-92.1-57.6-120.6-7.8-6.3-12.5-15.6-12.5-25.6 0-27.2 31.5-42.6 52.7-25.6 50.2 40.5 82.4 102.4 82.4 171.8 0 126.9-107.8 229.2-236.7 219.9-106.6-7.5-193.5-92.4-203.4-198.8zM244.883 0c-18 0-32.5 14.6-32.5 32.5v149.7c0 18 14.6 32.5 32.5 32.5s32.5-14.6 32.5-32.5V32.5c0-17.9-14.5-32.5-32.5-32.5z"
        }
      ></path>
    </svg>
  )
}

export default LogoutIcon
/* prettier-ignore-end */
