import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "白の监控",
  links: [],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'goway0128_top',
      name: '博客',
      method: 'GET',
      target: 'https://goway0128.top',
      tooltip: 'goway0128.top',
      statusPageLink: 'https://goway0128.top',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'api_10dianai_com',
      name: '10点用户台',
      method: 'GET',
      target: 'https://api.10dianai.com',
      tooltip: 'api.10dianai.com',
      statusPageLink: 'https://api.10dianai.com',
      timeout: 10000,
    },
    {
      id: 'cy_10dianai_com',
      name: '10点企业台',
      method: 'GET',
      target: 'https://cy.10dianai.com',
      tooltip: 'cy.10dianai.com',
      statusPageLink: 'https://cy.10dianai.com',
      timeout: 10000,
    },
    {
      id: 'api_10dian_ai_top',
      name: '10点官网',
      method: 'GET',
      target: 'https://api.10dian-ai.top',
      tooltip: 'api.10dian-ai.top',
      statusPageLink: 'https://api.10dian-ai.top',
      timeout: 10000,
    },
  ],
  notification: undefined,
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
