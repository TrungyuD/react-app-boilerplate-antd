import { ServiceBase } from 'services/http/service-base';

class ExampleService extends ServiceBase {
  getJson = async () => {
    const res = await this.get(`http://ip.jsontest.com/`);
    return res;
  };
}

const exampleService = new ExampleService();

export default exampleService;
