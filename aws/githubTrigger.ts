import {APIGatewayProxyHandlerV2} from 'aws-lambda/trigger/api-gateway-proxy';
import axios from 'axios';

const prismicSecret = process.env.PRISMIC_SECRET || '';
const githubUser = process.env.GITHUB_USER || '';
const githubRepo = process.env.GITHUB_REPO || '';
const githubToken = process.env.GITHUB_TOKEN || '';

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const body = JSON.parse(event.body || '{}') as { secret: string };
    if (body.secret !== prismicSecret) {
        return {
            statusCode: 403,
        };
    }

    const response = await axios.post(`https://api.github.com/repos/${githubUser}/${githubRepo}/dispatches`, {
        event_type: 'prismatic_update',
    }, {
        auth: {
            username: githubUser,
            password: githubToken,
        }
    });
    console.log('GitHub response', response.status, response.data);

    return {};
};
