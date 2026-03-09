interface IProject extends ICommon {
  Name: "DevCommit" | "LetsCode";
  WikiDir: "dev-commit" | "lets-code";
  CustomLayout: boolean;
  BasePath: string;
  Title: string;
  Description: string;
}

interface ICommon {
  RootDir: string;
  ThemeMobileColor: string;
}

interface IProjects {
  DevCommit: IProject;
  LetsCode: IProject;
}

const CommonConfig: ICommon = {
  RootDir: "wiki",
  ThemeMobileColor: "#265099",
};

export const Projects: IProjects = {
  DevCommit: {
    Name: "DevCommit",
    WikiDir: "dev-commit",
    CustomLayout: true,
    BasePath: "/workbook/", // FIXME: Поменять на "/" при загрузке на DevCommit
    Title: "DevCommit",
    Description: "Справочник",
    ...CommonConfig,
  },
  LetsCode: {
    Name: "LetsCode",
    WikiDir: "lets-code",
    CustomLayout: false,
    BasePath: "/workbook/",
    Title: "Let's Code Workbook",
    Description: "Методичка и справочные материалы",
    ...CommonConfig,
  },
};

export default Projects.DevCommit;
