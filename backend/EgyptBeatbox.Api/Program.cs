using EgyptBeatbox.Application;
using EgyptBeatbox.Infrastructure;
using Microsoft.OpenApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails(options =>
{
	options.CustomizeProblemDetails = context =>
	{
		context.ProblemDetails.Extensions["traceId"] = context.HttpContext.TraceIdentifier;
	};
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(c =>
	c.AddPolicy("Default", p => p.AllowAnyMethod().AllowAnyOrigin().AllowAnyHeader()));

builder.Services.AddControllers();

builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
	app.MapSwagger().RequireAuthorization();
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseStatusCodePages();
app.UseCors("Default");
app.UseExceptionHandler();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
