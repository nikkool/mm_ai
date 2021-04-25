// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type CalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function CalendarIcon(props: CalendarIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 489.2 489.2"}
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
          "M177.8 238.1c0 4.5-3.6 8.1-8.1 8.1h-30.4c-4.5 0-8.1-3.6-8.1-8.1v-30.4c0-4.5 3.6-8.1 8.1-8.1h30.4c4.5 0 8.1 3.6 8.1 8.1v30.4zm63.5-30.3c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5 0-8.1 3.6-8.1 8.1v30.4c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4zm63.5 0c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5 0-8.1 3.6-8.1 8.1v30.4c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4zm-127 61.8c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5 0-8.1 3.6-8.1 8.1V300c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4zm63.5 0c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5 0-8.1 3.6-8.1 8.1V300c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4zm55.4-8.1h-30.4c-4.5 0-8.1 3.6-8.1 8.1V300c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4c0-4.5-3.6-8.1-8.1-8.1zm-190.6 61.8H75.8c-4.5 0-8.1 3.6-8.1 8.1v30.4c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4c0-4.5-3.7-8.1-8.2-8.1zm8.2-53.7c0-4.5-3.6-8.1-8.1-8.1H75.8c-4.5 0-8.1 3.6-8.1 8.1V300c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4zm118.9 53.7h-30.4c-4.5 0-8.1 3.6-8.1 8.1v30.4c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4c0-4.5-3.6-8.1-8.1-8.1zm-63.5 0h-30.4c-4.5 0-8.1 3.6-8.1 8.1v30.4c0 4.5 3.6 8.1 8.1 8.1h30.4c4.5 0 8.1-3.6 8.1-8.1v-30.4c0-4.5-3.6-8.1-8.1-8.1zm190.5-77c4.5 0 8.1-3.6 8.1-8.1v-30.4c0-4.5-3.6-8.1-8.1-8.1h-30.4c-4.5 0-8.1 3.6-8.1 8.1v30.4c0 4.5 3.6 8.1 8.1 8.1h30.4zM47.7 435.9h230.7c-3.7-11.6-5.8-24-5.9-36.8H47.7c-6 0-10.8-4.9-10.8-10.8V171h361.7v101.1c12.8.1 25.2 2 36.8 5.7V94.9c0-26.3-21.4-47.7-47.7-47.7h-53.4V17.8c0-9.6-7.8-17.4-17.4-17.4h-27.1c-9.6 0-17.4 7.8-17.4 17.4v29.5H163V17.8C163 8.2 155.2.4 145.6.4h-27.1c-9.6 0-17.4 7.8-17.4 17.4v29.5H47.7C21.4 47.3 0 68.7 0 95v293.3c0 26.2 21.4 47.6 47.7 47.6zm441.5-38.2c0 50.3-40.8 91.1-91.1 91.1S307 448 307 397.7s40.8-91.1 91.1-91.1 91.1 40.8 91.1 91.1zm-45.1-23.6c0-2.9-1.1-5.7-3.2-7.7-4.3-4.3-11.2-4.3-15.5 0L385.8 406l-15.2-15.2c-4.3-4.3-11.2-4.3-15.5 0-2.1 2.1-3.2 4.8-3.2 7.7 0 2.9 1.1 5.7 3.2 7.7l22.9 22.9c4.3 4.3 11.2 4.3 15.5 0l47.3-47.3c2.2-2 3.3-4.8 3.3-7.7z"
        }
      ></path>
    </svg>
  )
}

export default CalendarIcon
/* prettier-ignore-end */
