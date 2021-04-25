// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type QrScanIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function QrScanIcon(props: QrScanIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 371.643 371.643"}
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

      <path d={"M105.084 38.271h163.768v20H105.084z"}></path>

      <path
        d={
          "M311.596 190.189c-7.441-9.347-18.403-16.206-32.743-20.522V30c0-16.542-13.458-30-30-30H125.084c-16.542 0-30 13.458-30 30v120.143h-8.296c-16.542 0-30 13.458-30 30v1.333a29.804 29.804 0 004.603 15.939c-7.34 5.474-12.103 14.221-12.103 24.061v1.333c0 9.84 4.763 18.587 12.103 24.062a29.81 29.81 0 00-4.603 15.938v1.333c0 16.542 13.458 30 30 30h8.324c.427 11.631 7.503 21.587 17.534 26.177.931 10.503 4.084 30.187 14.768 45.537a9.988 9.988 0 008.216 4.288 9.958 9.958 0 005.704-1.793c4.533-3.155 5.65-9.388 2.495-13.921-6.798-9.767-9.602-22.608-10.76-31.4h82.685c.272.414.545.818.815 1.21 3.142 4.541 9.372 5.679 13.913 2.534 4.542-3.142 5.677-9.371 2.535-13.913-11.919-17.229-8.787-35.884 9.581-57.012 3.067-2.652 12.307-11.732 11.217-24.033-.828-9.343-7.109-17.194-18.669-23.337a9.857 9.857 0 00-1.061-.486c-.466-.182-11.403-4.579-9.741-15.706 1.007-6.737 14.768-8.273 23.766-7.666 23.156 1.569 39.698 7.803 47.836 18.026 5.752 7.225 7.607 16.623 5.673 28.733-.413 2.585-.824 5.241-1.245 7.959-5.756 37.194-12.919 83.483-49.87 114.661-4.221 3.561-4.756 9.87-1.194 14.092a9.98 9.98 0 007.648 3.551 9.955 9.955 0 006.444-2.358c42.672-36.005 50.802-88.533 56.737-126.888.415-2.684.821-5.309 1.229-7.863 2.834-17.721-.455-32.641-9.772-44.345zm-232.308 42.62c-5.514 0-10-4.486-10-10v-1.333c0-5.514 4.486-10 10-10h15v21.333h-15zm-2.5-52.666c0-5.514 4.486-10 10-10h7.5v21.333h-7.5c-5.514 0-10-4.486-10-10v-1.333zm17.5 93.999h-7.5c-5.514 0-10-4.486-10-10v-1.333c0-5.514 4.486-10 10-10h7.5v21.333zm30.796 28.887c-5.514 0-10-4.486-10-10v-8.271h91.457c-.851 6.668-.437 12.787.731 18.271h-82.188zm79.482-113.698c-3.124 20.906 12.427 33.184 21.625 37.04 5.441 2.968 7.551 5.647 7.701 7.188.21 2.15-2.553 5.684-4.477 7.251-.482.378-.929.8-1.335 1.261-6.987 7.936-11.982 15.52-15.432 22.688h-97.564V30c0-5.514 4.486-10 10-10h123.769c5.514 0 10 4.486 10 10v135.579c-3.032-.381-6.15-.694-9.389-.914-25.159-1.694-42.37 7.748-44.898 24.666z"
        }
      ></path>

      <path
        d={
          "M179.129 83.167h-24.06a5 5 0 00-5 5v24.061a5 5 0 005 5h24.06a5 5 0 005-5V88.167a5 5 0 00-5-5zm-6.5 59.693h-12.56V130.8a5 5 0 10-10 0v17.061a5 5 0 005 5h17.56a5 5 0 100-10.001zm43.939-59.693h-24.06a5 5 0 00-5 5v24.061a5 5 0 005 5h24.06a5 5 0 005-5V88.167a5 5 0 00-5-5zm-5 24.061h-14.06V93.167h14.06v14.061zm.101 18.708H197.41a5 5 0 00-5 5v14.257a5 5 0 005 5h14.259a5 5 0 005-5v-14.257a5 5 0 00-5-5z"
        }
      ></path>
    </svg>
  )
}

export default QrScanIcon
/* prettier-ignore-end */
