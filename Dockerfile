# Use official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy project files and restore dependencies
COPY *.csproj ./ 
RUN dotnet restore

# Copy remaining files and publish the application
COPY . ./ 
RUN dotnet publish -c Release -o /app/publish

# Use ASP.NET Core runtime for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish ./

# Set environment variables for Azure
ENV ASPNETCORE_ENVIRONMENT=Production
EXPOSE 80

# Define entry point
CMD ["dotnet", "PlantTrackerApi.dll"]