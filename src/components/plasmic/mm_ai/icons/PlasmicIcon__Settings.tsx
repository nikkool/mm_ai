// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type SettingsIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function SettingsIcon(props: SettingsIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 480.3 480.3"}
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
          "M254.15 234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v220.6c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v98.2c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-98.2c31.3-6.3 55-34 55-67.2 0-33.1-23.6-60.9-55-67.2zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.6 41.5-41.5 41.5zM88.85 120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v107.4c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v211.4c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V255.2c31.3-6.3 55-34 55-67.2s-23.7-60.8-55-67.1zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.7 41.5-41.5 41.5zm343.1-108.7V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v107.4c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v211.5c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V255.2c31.3-6.3 55-34 55-67.2s-23.6-60.8-55-67.1zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.6 41.5-41.5 41.5z"
        }
      ></path>
    </svg>
  )
}

export default SettingsIcon
/* prettier-ignore-end */
