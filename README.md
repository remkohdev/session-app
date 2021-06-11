# session-app

```bash
docker login -u remkohdev
docker build -t session-app:1.0.0 .
docker tag session-app:1.0.0 remkohdev/session-app:1.0.0
docker push remkohdev/session-app:1.0.0
```

```bash
oc login
oc new-project my-session-app
oc create sa session-app
oc create -f helm/deployment.yaml
oc create -f helm/statefulset.yaml
oc create -f helm/service.yaml
oc expose svc session-app
```

```bash
oc delete route session-app
oc delete svc session-app
oc delete deploy session-app
oc delete statefulset session-app
oc delete project my-session-app
```

```bash
URL=<url>

curl -c cookies.txt -u "user1:password1" $URL
curl -b cookies.txt -u "user1:password1" $URL
```

```bash
chmod +x bulk-requests.sh
./bulk-requests.sh > bulk-responses-loadbalancer.txt
./bulk-requests.sh > bulk-responses-route.txt
./bulk-requests.sh > bulk-responses-loadbalancer-stateful.txt
```
