import {HStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"




export const ToolBar = () => {
    return (
      <div className="toolBar" >
          <HStack>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                Breadcrumb
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>
      </div>
    )
  }