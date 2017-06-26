using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace HCYE_WebApi.App_Start
{
    public class AvoidOptionHandler : DelegatingHandler
    {
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request.Method == HttpMethod.Options)
            {
                var taskCompletion = new TaskCompletionSource<HttpResponseMessage>();
                taskCompletion.SetResult(new HttpResponseMessage(System.Net.HttpStatusCode.OK));
                return taskCompletion.Task;
            }
            else
            {
                return base.SendAsync(request, cancellationToken);
            }
        }

    }
}