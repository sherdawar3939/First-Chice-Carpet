import { MenuProps } from "antd";
import { ProfileOutlined, MonitorOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <p className="hover:text-slate-400">Profile</p>,
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: (
            <Link className="hover:text-slate-400" href={`/profile`}>
              Account
            </Link>
          ),
          key: `/profile`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    {
      label: <p>Product</p>,
      icon: <MonitorOutlined />,
      key: ``,
      children: [
        {
          label: (
            <Link className="hover:text-slate-400" href={`/admin/newproduct`}>
              New Product
            </Link>
          ),
          key: `/admin/newproduct`,
        },
        {
          label: (
            <Link className="hover:text-slate-400" href={`/admin/product`}>
              Product
            </Link>
          ),
          key: `/admin/product`,
        },
      ],
    },
    {
      label: <p>Blog</p>,
      icon: <MonitorOutlined />,
      key: `#`,
      children: [
        {
          label: (
            <Link className="hover:text-slate-400" href={`/admin/newblog`}>
              New Blog
            </Link>
          ),
          key: `/admin/newblog`,
        },
        {
          label: (
            <Link className="hover:text-slate-400" href={`/admin/blog`}>
              Blog
            </Link>
          ),
          key: `/admin/blog`,
        },
      ],
    },
    {
      label: <p>Contact</p>,
      icon: <MonitorOutlined />,
      key: `#1`,
      children: [
        {
          label: (
            <Link className="hover:text-slate-400" href={`/admin/newcontact`}>
              New Contact
            </Link>
          ),
          key: `/admin/newcontact`,
        },
        {
          label: (
            <Link className="hover:text-slate-400" href={`/admin/contact`}>
              Contact
            </Link>
          ),
          key: `/admin/contact`,
        },
      ],
    },

    // {
    //   label: (
    //     <Link className="hover:text-slate-400" href={`/admin/newblog`}>
    //       New Blog
    //     </Link>
    //   ),
    //   icon: <MonitorOutlined />,
    //   key: `/admin/newblog`,
    // },
  ];

  if (role === "user") {
    return userSidebarItems;
  } else {
    return defaultSidebarItems;
  }
};
