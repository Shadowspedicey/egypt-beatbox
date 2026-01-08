FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY ./EgyptBeatbox.Domain/*.csproj ./EgyptBeatbox.Domain/
COPY ./EgyptBeatbox.Application/*.csproj ./EgyptBeatbox.Application/
COPY ./EgyptBeatbox.Infrastructure/*.csproj ./EgyptBeatbox.Infrastructure/
COPY ./EgyptBeatbox.Api/*.csproj ./EgyptBeatbox.Api/

RUN dotnet restore "./EgyptBeatbox.Api/EgyptBeatbox.Api.csproj"

COPY . .

WORKDIR /src/EgyptBeatbox.Api
RUN dotnet build -c Release -o /app --no-restore



FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

WORKDIR /app

COPY --from=build /app .

ENV ASPNETCORE_URLS="http://0.0.0.0:5000"

EXPOSE 5000

ENTRYPOINT [ "dotnet", "EgyptBeatbox.Api.dll" ]