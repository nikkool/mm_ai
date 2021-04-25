// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jvgKmcyqVhg6pkonUhiUTk
// Component: jaTCIGBsXCTU
import * as React from "react"

import { Link, GatsbyLinkProps as LinkProps } from "gatsby"

import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"

import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css" // plasmic-import: jvgKmcyqVhg6pkonUhiUTk/projectcss
import * as sty from "./PlasmicHomepage.module.css" // plasmic-import: jaTCIGBsXCTU/css

export type PlasmicHomepage__VariantMembers = {}

export type PlasmicHomepage__VariantsArgs = {}
type VariantPropType = keyof PlasmicHomepage__VariantsArgs
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>()

export type PlasmicHomepage__ArgsType = {}
type ArgPropType = keyof PlasmicHomepage__ArgsType
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>()

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">
  box?: p.Flex<"div">
}

export interface DefaultHomepageProps {
  className?: string
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs
  args: PlasmicHomepage__ArgsType
  overrides: PlasmicHomepage__OverridesType
  forNode?: string
}) {
  const { variants, args, overrides, forNode } = props

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box
            )}
          >
            {"Welcome to your first page."}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number]
type NodeDefaultElementType = {
  root: "div"
  box: "div"
}

type ReservedPropsType = "variants" | "args" | "overrides"
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHomepage__VariantsArgs
  args?: PlasmicHomepage__ArgsType
  overrides?: NodeOverridesType<T>
} & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps,
    })

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage"
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`
  }
  return func
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
  }
)

export default PlasmicHomepage
/* prettier-ignore-end */
