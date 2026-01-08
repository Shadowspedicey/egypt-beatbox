namespace EgyptBeatbox.Domain.Shared
{
	public readonly record struct ShortId
	{
		public string Value { get; }

		public ShortId(string value)
		{
			if (value.Length != 5 || !int.TryParse(value, out _))
				throw new ArgumentException("ShortId must be a 5-digit numeric string.", nameof(value));
			Value = value;
		}

		public static ShortId Generate()
		{
			var value = Random.Shared
				.Next(0, 100000)
				.ToString("D5");

			return new ShortId(value);
		}

		public override string ToString() => Value;
	}
}
