const localPath = "http://localhost:4200/server";

export const environment = {
  production: true,
  basePaths: {
    customerServer: localPath + "/customer",
  }
};
